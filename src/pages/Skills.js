import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Java', value: 30 },
  { name: 'React', value: 10 },
  { name: 'Spring Boot', value: 20 },
  { name: 'Angular', value: 20 },
  { name: 'SQL', value: 15 },
  { name: 'AI/ML', value: 10 },
];

const COLORS = ['#0d6efd', '#6610f2', '#198754', '#ffc107', '#dc3545', '#6f42c1'];

function Skills() {
  return (
    <div className="container py-5">
      <motion.h2
        className="text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Technical Skills
      </motion.h2>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={140}
                fill="#8884d8"
                dataKey="value"
                label={({ name }) => name}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Skills;
